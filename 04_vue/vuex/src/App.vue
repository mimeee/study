<template>
  <div id="app">
  	<app-result></app-result>
  	<hr>	
  	<app-counter></app-counter>
  	{{ datas }}
  	{{ doubleCounter }}
  	<input type="text" v-model:value="daaa">
  	<input type="text" v-model:value="sss">
  	{{ sss }}
  	<button class="btn btn-danger" @click="changedd">btn</button>
  </div>
</template>

<script>
import appCounter from "./components/counter.vue"
import appResult from "./components/result.vue"
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';
export default {
	components:{
		appCounter,
		appResult
	},
	data(){
		return {
			sss:2
		}
	},
	computed:{

		datas(){
			console.log( mapGetters(['doubleCounter','haha']) );
			//Object { doubleCounter: mappedGetter(), haha: mappedGetter() }
			return this.$store.getters.doubleCounter;
		},
		...mapGetters(['doubleCounter','haha']),
		daaa:{
			get(){
				return this.$store.getters['doubleCounter']();
			},
			set(value){

				this.$store.dispatch('changeCounter',value)
			}
		}
	},
	methods:{
		...mapMutations(
			['changeCounter']
		),
		changedd(){
			// this.$store.dispatch('changeCounter',5);

			setTimeout(()=>{
				this.$store.commit("changeCounter",5)
			},2000)
			alert(123)
		},

	}
}
</script>

<style>


</style>
