<template>
  <div>
 	<button @click="add" class="btn btn-primary">add</button>
 	<hr>
 	<button @click="minus" class="btn btn-primary">minus</button>
  </div>
</template>

<script>
export default {
  props:['counter'],
  data(){
  	return {
  		c:this.counter
  	}
  },
  methods:{
  	add(){
  		this.$store.state.counter++;
  	},
  	minus(){
  		this.$store.state.counter --;
  	}
  }
}
</script>

<style>


</style>
