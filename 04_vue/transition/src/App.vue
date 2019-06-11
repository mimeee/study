<template>
  <div id="app container">
	<div class="row">
		<div class="col-6">
			<select class="form-control" v-model="aniType">
				<option value="bounce">bounce</option>
				<option value="fade">fade</option>
				<option value="lightSpeed">lightSpeed</option>
				<option value="rotate">rotate</option>
			</select>
		</div>
		<div class="col-6">
			<button class="btn btn-primary w-100" @click="show = !show">click</button>
		</div>
		<div class="col">	
			<ul class="list-group">
			<transition 
				:enter-active-class= "ani['in']"
				:leave-active-class= "ani['out']"
				mode="out-in"
			>
				<li key="1" v-if="show" class="list-group-item list-group-item-success">4</li>
				<li key="2" v-else="show" class="list-group-item list-group-item-success">5</li>
			</transition>
			<transition 
				enter-active-class="animated bounce"
				leave-active-class="animated bounce"
			>
				<li class="list-group-item">1</li>
			</transition>
			<transition enter-active-class="animated flash">
				<li class="list-group-item">2</li>
			</transition>
			<transition enter-active-class="animated rubberBand">
				<li class="list-group-item">3</li>
			</transition>
			
			</ul>		

				<transition-group
					enter-active-class="animated bounce"
					leave-active-class="animated bounce"
				>
					<div v-if="show" class="alert alert-danger" :key="1">01</div>
					<div v-if="show" class="alert alert-danger" :key="2">01</div>
				</transition-group>
		</div>
	</div>
  </div>
</template>

<script>
export default {
	data(){
		return {
			show:true,
			aniType:'bounce'
		}
	},
	computed:{
		ani(){
			return {
				in:"animated " + this.aniType + "In",
				out:"animated " + this.aniType + "Out"
			}
		}
	}
}
</script>

<style>
	
</style>
