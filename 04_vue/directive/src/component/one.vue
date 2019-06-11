<template>
  <div>
   	<div>
		{{ children }} {{ child }}
	</div>
	<button class="btn btn-primary" @click="children = Math.random()">btn</button>
  </div>
</template>

<script>
export default {
	props:['child'],
  data(){
		return {
			info: "info",
			children: "children"
		}
	},
	watch:{
		child(){
			alert(1)
		}
	}
}
</script>

<style>


</style>
