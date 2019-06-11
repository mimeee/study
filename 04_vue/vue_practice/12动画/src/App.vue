<template>
  <div id="app" class="container">
  	<div class="row">
  		<div class="col-12 text-center text-success">
			<header>
				<h2 class="display-3">
					Come and Guess Quiz
				</h2>
				<hr class="my-4">
			</header>
  		</div>
  		<div class="offset-3 col-6">
  			<transition
  				:enter-active-class="'animated zoomInDown'" 
  				:leave-active-class="'animated zoomOutDown'"
  				mode="out-in" 
  			>
  			<component 
  				:is="selectComponent" 
  				@sAns="ans" 
  				:res="answer" 
  				:start="start"
  			>
  			</component>
  			</transition>
  		</div>
  	</div>
  </div>
</template>

<script>
import appQuestion from './component/question.vue';
import appAnswer from './component/answer.vue';

export default {
	components:{
		appQuestion,
		appAnswer
	},
	data(){
		return {
			selectComponent:"app-question",
			answer:""
		}
	},
	methods:{
		ans(v){
			this.answer = v; 
			this.selectComponent = "app-answer";
		},
		start(){
			this.selectComponent = "app-question";
		}
	}
}
</script>

<style>
	h2{

	}

</style>
