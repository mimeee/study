<template>
  <div>
    <div class="jumbotron">
      <h3 class="text-success" v-if="result['isTure']">you are right</h3>
      <h3 class="text-danger" v-else>you are wrong</h3>
      <hr class="my-3">
      <div class="row">
        <div class="lead col-auto">
         	the answer is {{ result['answer'] }}
        </div>
      </div>
      <hr class="my-4">
      <div class="row justify-content-end">
      	<div class="col-auto">
	      	<button class="btn btn-primary" @click="start">guess again</button>
      	</div>
      </div>
    </div>
  </div>

</template>
<script>
export default {
	props:["res","start"],
	computed:{
		result(){
			var res = {
				isTure:this.res.split(",")[0] === 'false' ? false : true,
				answer:this.res.split(",")[1]
			}
			return res;
		}
	}
}

</script>
<style>


</style>
