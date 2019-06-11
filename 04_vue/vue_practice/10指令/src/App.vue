<template>
  <div id="app">
  	<div class="container">
  		<div class="row">
			<div class="text-center w-100">123</div>
  		</div>
  		<div class="row">
  			<div class="col">
				<button class="btn btn-primary w-100" v-myon="hehe">btn</button>
  			</div>
  		</div>
	</div>
  </div>
</template>

<script>

export default {
	directives:{
		myon:{
			bind(el,building,vnode){
				let event = building.arg === undefined ? 'click' : building.arg;
				let fn = building.value === undefined ? function(){} : building.value;
				el.addEventListener(event,fn);
				// console.log(building);
				console.log(vnode);
			},
			inserted(){

			},
			update(){

			},
			componentUpdated(){

			},
			unbind(){

			}
		}
	},
	methods:{
		hehe(){
			alert('hehe');
		}
	}
}
</script>

<style scoped="">
div{
	margin-top: 20px;
}

</style>
