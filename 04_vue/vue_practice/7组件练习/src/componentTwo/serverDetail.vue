<template>
  <div>
  	这个可改的,不会影响原来的元素：{{ detail === "" ? "wait" : detail }}
  	<br>
  	<input type="text" v-model="detail">
  	<br>
  	<hr>
	这个不可改的,会影响原来的元素：{{ detailObj.status }}
	<br>
	<input type="text" v-model="detailObj.status">
	<hr>
	存在data里的obj：{{ status.status }}
	<br>
	<input type="text" v-model="status.status">
	<button @click="look">btn</button>
  </div>
</template>

<script>
export default {
 props:['detail','detailObj'],
 computed:{
 	status(){
 		return this.detailObj;
 	}
 },
 methods:{
 	look(){
 		console.log(this.status);
 	}
 }
  
}
</script>

<style scoped>
 

</style>

