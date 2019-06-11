<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <app-header></app-header>
      </div>
      <hr>
      <div class="row">
        <div class="col">
          <ul class="list-group">
            <app-server v-for="server in servers" :server="server" @sta="c"></app-server>
          </ul>
        </div>
        <div class="col">
          <div class="message">
            {{ status }}
          </div>
        </div>
      </div>
      <hr>
      <div class="row">
        <app-footer></app-footer>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <app-header></app-header>
      </div>
      <hr>
      <div class="row">
        <div class="col">
          <app-one-server :clickEvent="run"></app-one-server>
        </div>
        <div class="col">
          <app-server-detail :detail = "server.status" :detailObj="server"></app-server-detail>
        </div>
      </div>
      <hr>
      <div class="row">
        <app-footer></app-footer>
      </div>
    </div>
  </div>
</template>

<script>
import appHeader from "./component/header.vue";
import appFooter from "./component/footer.vue";

// 方案一
import appServer from "./component/server.vue";

//方案二
import appOneServer from "./componentTwo/servers.vue";
import appServerDetail from "./componentTwo/serverDetail.vue";


export default {
  components:{
    appHeader,
    appFooter,
    appServer,
    appOneServer,
    appServerDetail
  },
  data(){
    return {
      //方案一
      servers:[
        {id:'1',status:'normal'},
        {id:'2',status:'broken'},
        {id:'3',status:'missed'},
        {id:'4',status:'connect'},
        {id:'5',status:'cray'},
        {id:'6',status:'cray'},
      ],
      status:"",

      //方案二
      server: ""
    }
  },
  methods:{
    //方案一
    c(value){
      this.status = value;
    },
    //方案二
    run(obj){
      this.server = obj; 
    }
  },
}
</script>

<style scoped="">
  .message{
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    height: 100%;
    padding: 10px;
  }

</style>
