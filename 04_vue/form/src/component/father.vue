<template>
	<div class="root">
		{{ a }}
		<app-child :message = "type" :come="come" @back = "hehe($event)">
			{{ gooo }}
			<p slot="ee">ee</p>
		</app-child>
		}
	</div>	
</template>

<script>
import child from './child.vue';
import {eventbus} from '../main.js';
export default {
	components:{
		appChild:child
	},
	data(){
		return {
			type:'String Number Boolean Array Object',
			a:"000"
		}
	},
	computed:{
		gooo(){
			return 'goooo';
		}
	},
	methods:{
		come(a){
			this.a = a;
		},
		hehe(e,l){
			console.log(e);
			console.log(l);
		}
	},
	created(){
		eventbus.$on('qqq',(data)=>alert(data));
		alert(eventbus.keee);
	}
}
</script>

<style>
	
</style>