<template>
  <div>
	<h1>father one</h1>
  </div>
</template>

<script>
export default {
	beforeRouteEnter(to,from,next){
		console.log('hehe');
		next();
	},
	beforeRouteLeave(to,from,next){
		console.log('leave');
		next();
	}
}
</script>

<style>


</style>
