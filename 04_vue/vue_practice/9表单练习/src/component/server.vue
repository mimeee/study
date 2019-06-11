<template>
  <div>
   <li class="list-group-item" @click="status">Server #{{ server.id }}</li>
  </div>
</template>

<script>
export default {
  props:['server'],
  methods:{
  	status(e){
  		this.$emit("sta",this.server.status);
  	}
  }
}
</script>

<style scoped>
li{
	cursor:pointer;
}

</style>
