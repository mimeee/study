<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col">
          <button class="btn btn-primary w-100" @click="toggleOne">primary-one</button>
        </div>
        <div class="col">
          <button class="btn btn-success w-100" @click="toggleTwo">success-two</button>
        </div>
        <div class="col">
          <button class="btn btn-danger w-100" @click="toggleThree">danger-three</button>
        </div>
      </div>
      <component :is="component">
        {{ detail }}
        把变量detail删除就输出默认的
      </component>
    </div>
  </div>
</template>

<script>
import appOne from "./component/one.vue";
import appTwo from "./component/two.vue";
import appThree from "./component/three.vue";
export default {
  components:{
    appOne,
    appTwo,
    appThree
  },
  data(){
    return {
      component:'app-one',
      details:{
        'app-one':'this is the one',
        'app-two':'this is the two',
        'app-three':'this is the three'
      }
    }
  },
  computed:{
    detail(){
      return this.details[this.component];
    }
  },
  methods:{
    toggleOne(){
      this.component = 'app-one';
    },
    toggleTwo(){
      this.component = 'app-two';
    },
    toggleThree(){
      this.component = 'app-three';
    },
  }
}
</script>

<style scoped="">
  .row{
    margin: 20px 0;
  }
</style>
