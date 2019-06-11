<template>
  <div id="app">
    <button @click="toggle">click</button>
    <keep-alive>
      <component :is="com"></component>
    </keep-alive>
<!--       <component :is="com"></component> -->
  </div>
</template>

<script>
  import one from './component/one.vue';
  import two from './component/two.vue';
export default {
  components:{
    appOne:one,
    appTwo:two
  },
  data(){
    return {
      com:"app-two"
    }
  },
  methods:{
    toggle(){
      this.com = this.com === "app-one" ? "app-two" : "app-one";
    }
  }
}
</script>

<style>


</style>
