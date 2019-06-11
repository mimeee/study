<template>
	<div class="root">
		<div class="bg">
			<div class="bar">
				{{ number }}	
			</div>
		</div>
	</div>	
</template>
<script>
	export default {
		props:{
			number:{
				type:Number,
				required:true
			}
		},
		computed:{
			num(){
				return this.number + '%';
			}
		}

	}	
</script>
<style scoped>
	.bg{
		background: olive;
	}	
</style>