<template>
  <div>
   	<div class="one">
   		<div>
   			{{ num }}
   		</div>
   		<button @click="add">add</button>
   	</div>
  </div>
</template>

<script>
export default {
  data(){
  	return{
	  	num:0
  	}
  },
  methods:{
  	add(){
  		this.num ++;
  	}
  },
  // created(){
  // 	console.log("i'm one,i'm created "+Math.random());
  // },
  // beforeCreate(){
  // 	console.log("i'm one,i will be created "+Math.random());
  // },
  // beforeMount(){
  // 	console.log("i'm one,i will mount on one element "+Math.random());
  // },
  // mounted(){
  // 	console.log("i'm one,i'm mounting on one element "+Math.random());
  // },
  // destroyed(){
  // 	console.log("i'm one,i was destoryed!!!byebye "+Math.random());
  // },
  // beforeDestroy(){
  // 	console.log("i'm one,i will be destory!!!wuwuwu "+Math.random());
  // },
  // updated(){
  // 	console.log("i'm one,i'm updated!!!strong "+Math.random());
  // },
  // beforeUpdate(){
  // 	console.log("i'm one,i will be update!!!hahahaha "+Math.random());
  // },

  activated(){
  	console.log('activated');
  },
  deactivated(){
  	console.log('deactivated');
  }
}
</script>

<style scoped>
	.one{
		background: red;
	}

</style>
