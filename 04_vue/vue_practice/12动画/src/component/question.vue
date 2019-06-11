<template>
  <div>
    <div class="jumbotron">
      <h3 class="display-5">question: {{ question }}</h3>
      <hr class="my-3">
      <div class="row">
        <div class="col-6" v-for="v in answer">
          <button class="btn btn-primary w-100" @click="isCorrect" :value="v">{{ v }}</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      paramOne: Math.ceil(Math.random() * 100),
      paramTwo: Math.ceil(Math.random() * 100),
    }
  },
  computed: {
    question() {
    	return this.paramOne + " + " + this.paramTwo + " ? ";
    },
    answer(){
    	var aAns = [];
    	for(var i = 0; i < 4; i ++ ){
    		aAns.push(Math.ceil(Math.random() * 200));
    	}
    	var index = Math.floor(Math.random() * 4);
    	aAns[index] = this.correctAnswer;
    	return aAns
    },
    correctAnswer(){
    	return this.paramOne + this.paramTwo;
    }
  },
  methods:{
  	isCorrect(e){
  		this.$emit('sAns',(e.target.value == this.correctAnswer ? true : false) + "," + this.correctAnswer);
  	}
  }
}

</script>
<style scoped="">
.col-6 {
  margin-top: 10px !important;
}

</style>
